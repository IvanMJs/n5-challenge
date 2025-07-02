
    export type RemoteKeys = 'rickandmortymf/CharacterList';
    type PackageType<T> = T extends 'rickandmortymf/CharacterList' ? typeof import('rickandmortymf/CharacterList') :any;