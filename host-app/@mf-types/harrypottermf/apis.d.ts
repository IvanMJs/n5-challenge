
    export type RemoteKeys = 'harrypottermf/CharacterList';
    type PackageType<T> = T extends 'harrypottermf/CharacterList' ? typeof import('harrypottermf/CharacterList') :any;