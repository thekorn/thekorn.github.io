{
  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    zine.url = "github:kristoff-it/zine";
    ziggy.url = "github:thekorn/ziggy";
    superhtml.url = "github:thekorn/superhtml";
  };

  outputs =
    {
      flake-utils,
      nixpkgs,
      zine,
      ziggy,
      superhtml,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = (import nixpkgs) {
          inherit system;
        };
        zinePkg = zine.packages.${system}.default.overrideAttrs (old: {
          nativeBuildInputs = [ pkgs.zig ] ++ (old.nativeBuildInputs or [ ]);
          preBuild = ''
            export ZIG_GLOBAL_CACHE_DIR=$(mktemp -d)
            export ZIG_LOCAL_CACHE_DIR=$(mktemp -d)
          '';
        });
        ziggyPkg = ziggy.packages.${system}.default;
        superhtmlPkg = superhtml.packages.${system}.default;
        #ziggyPkg = ziggy.packages.${system}.default.overrideAttrs (old: {
        #  nativeBuildInputs = [ pkgs.zig_0_14 ] ++ (old.nativeBuildInputs or [ ]);
        #  preBuild = ''
        #    export ZIG_GLOBAL_CACHE_DIR=$(mktemp -d)
        #    export ZIG_LOCAL_CACHE_DIR=$(mktemp -d)
        #  '';
        #});
      in
      {
        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [
            zig
            zls
            zinePkg
            ziggyPkg
            superhtmlPkg
          ];

          shellHook = ''
            alias zed='zeditor'
          '';

        };
      }
    );
}
