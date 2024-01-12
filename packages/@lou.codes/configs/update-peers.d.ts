#!/usr/bin/env node
export type PackageJSON = {
    name: string;
    description: string;
    version: string;
    author: {
        email: string; /** @typedef {import("./package.json")} PackageJSON */
        name: string;
        url: string;
    };
    bin: {
        "update-peers": string;
    };
    bugs: {
        email: string;
        url: string;
    };
    dependencies: {
        "@changesets/types": string;
        "@eslint/js": string;
        "@types/eslint": string;
        "@types/node": string;
        "@typescript-eslint/eslint-plugin": string;
        "@typescript-eslint/parser": string;
        "@typescript-eslint/type-utils": string;
        "eslint-config-prettier": string;
        "eslint-import-resolver-node": string;
        "eslint-plugin-functional": string; /** @type {ReadonlyArray<PackageJSONEntry>} */
        "eslint-plugin-import": string;
        "eslint-plugin-no-null": string;
        "eslint-plugin-prefer-arrow": string;
        "eslint-plugin-prettier": string;
        "eslint-plugin-react": string;
        "eslint-plugin-react-hooks": string;
        "eslint-plugin-unicorn": string;
        "stylelint-order": string;
        "stylelint-prettier": string;
    };
    devDependencies: {
        eslint: string;
        prettier: string;
        stylelint: string;
        typescript: string;
    };
    engines: {
        node: string;
        pnpm: string;
    };
    exports: {
        ".": string;
        "./changelog.cjs": string;
        "./changelog.d.cts": string;
        "./*.js": string;
        "./*.d.ts": string;
        "./*.css": string;
        "./*.json": string;
    };
    files: string[];
    homepage: string;
    keywords: string[];
    license: string;
    peerDependencies: {
        eslint: string;
        prettier: string;
        stylelint: string;
        typescript: string;
    };
    peerDependenciesMeta: {
        stylelint: {
            optional: boolean;
        };
    };
    repository: {
        type: string;
        url: string;
    };
    scripts: {
        clean: string;
        compile: string;
        dependencies: string;
        "git:pre-push": string;
        lint: string;
        prepublishOnly: string;
        prettify: string;
    };
    sideEffects: boolean;
    type: string;
};
export type PackageJSONEntry = [keyof PackageJSON["peerDependencies"], PackageJSON["peerDependencies"][keyof PackageJSON["peerDependencies"]]];
