"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"
import {
  StyledInputOTP,
  StyledInputOTPGroup,
  StyledInputOTPSlot,
  StyledInputOTPSeparator,
  StyledInputOTPCaret,
} from "./InputOtp.styles"

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <StyledInputOTP
    as={OTPInput}
    ref={ref}
    className={className}
    containerClassName={containerClassName}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <StyledInputOTPGroup ref={ref} className={className} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <StyledInputOTPSlot
      ref={ref}
      $isActive={isActive}
      className={className}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <StyledInputOTPCaret>
          <div />
        </StyledInputOTPCaret>
      )}
    </StyledInputOTPSlot>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <StyledInputOTPSeparator ref={ref} role="separator" {...props}>
    <Dot />
  </StyledInputOTPSeparator>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
