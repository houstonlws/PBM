MAIN_VERSION="1.0.0"

# Get specific version info from submodules
SUBMODULE_VERSIONS=$(git submodule foreach --quiet 'echo $name@$(git describe --tags)')

# Combine into a single version string
VERSION="$MAIN_VERSION ($SUBMODULE_VERSIONS)"

echo $VERSION