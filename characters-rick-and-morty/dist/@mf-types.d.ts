
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/CharacterList';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/CharacterList' ? typeof import('REMOTE_ALIAS_IDENTIFIER/CharacterList') :any;