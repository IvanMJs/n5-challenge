"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"
import {
  StyledChartContainer,
  StyledChartTooltipContent,
  StyledChartTooltipLabel,
  StyledChartTooltipItem,
  StyledChartTooltipIndicator,
} from "./Chart.styles"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }
  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <StyledChartContainer
        data-chart={chartId}
        ref={ref}
        className={className}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </StyledChartContainer>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "Chart"

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, config]) => config.theme || config.color
  )
  if (!colorConfig.length) {
    return null
  }
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: "line" | "dot" | "dashed"
      nameKey?: string
      labelKey?: string
    }
>(
  (
    {
      active,
      payload,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
      ...props
    },
    ref
  ) => {
    const { config } = useChart()
    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null
      }
      const [item] = payload
      const key = `${labelKey || item.dataKey || item.name || "value"}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label
      if (labelFormatter) {
        return (
          <StyledChartTooltipLabel>
            {labelFormatter(value, payload)}
          </StyledChartTooltipLabel>
        )
      }
      if (!value) {
        return null
      }
      return <StyledChartTooltipLabel>{value}</StyledChartTooltipLabel>
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ])
    if (!active || !payload?.length) {
      return null
    }
    const nestLabel = payload.length === 1 && indicator !== "dot"
    return (
      <StyledChartTooltipContent ref={ref} {...props}>
        {!nestLabel ? tooltipLabel : null}
        <div>
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item.payload.fill || item.color
            return (
              <StyledChartTooltipItem key={item.dataKey}>
                {!hideIndicator && (
                  <StyledChartTooltipIndicator
                    $type={indicator}
                    $color={indicatorColor}
                  />
                )}
                {formatter
                  ? formatter(item.value, item.name, item, index)
                  : item.value}
              </StyledChartTooltipItem>
            )
          })}
        </div>
      </StyledChartTooltipContent>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltipContent"

function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: any,
  key: string
) {
  return config?.[key] || payload?.payload?.config || {}
}

export {
  ChartContainer as Chart,
  ChartTooltip,
  ChartTooltipContent,
}
