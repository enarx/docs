# Initial Setup

## Install Dependencies

### Disclaimer

Please note that most Enarx developers use Fedora, so that is the
distribution where we'll be able to offer most support, if any.

Please feel free to file a pull request to add your favorite distribution
if you're able to build and run the Enarx test suite.

### A note on gcc

The minimum required `gcc` version is version 9. Something older _might_ build
binaries (such as integration test binaries), but may silently drop required
compiler flags. Please ensure you're using the minimum required version of `gcc`.
Failure to do so might result in weird failures at runtime.

### Fedora

    $ sudo dnf install git curl gcc pkg-config openssl-devel musl-gcc

### CentOS 8 / Stream

    $ sudo dnf copr enable ngompa/musl-libc
    $ sudo dnf install git curl gcc-toolset-9 openssl-devel musl-gcc
    $ source "/opt/rh/gcc-toolset-9/enable"

Note: you may want to add that final `source` command to a `~/.profile`,
`~/.bashrc` / or `~/.bash_profile` equivalent, otherwise you must remember
to source that file prior to building `enarx`.

### CentOS 7 / Scientific Linux 7 and other clones

    $ sudo yum install centos-release-scl-rh

or search for the package on https://centos.pkgs.org/ and install it manually with, for example:

    $ sudo yum install http://mirror.centos.org/centos/7/extras/x86_64/Packages/centos-release-scl-rh-2-3.el7.centos.noarch.rpm

and then:

    $ sudo yum install yum-plugin-copr    
    $ sudo yum copr enable ngompa/musl-libc
    $ sudo yum install git curl devtoolset-9 openssl-devel musl-gcc
    $ source "/opt/rh/gcc-toolset-9/enable"

Note: you may want to add that final `source` command to a `~/.profile`,
`~/.bashrc` / or `~/.bash_profile` equivalent, otherwise you must remember
to source that file prior to building `enarx`.

Instead of `devtoolset-9` you can choose `devtoolset-10` or later versions.

### Debian / Ubuntu

    $ sudo apt update
    $ sudo apt install git curl gcc pkg-config libssl-dev musl-tools python3-minimal

## Install Rust, Nightly and the toolchains

    $ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
    $ source $HOME/.cargo/env
    $ rustup toolchain install nightly --allow-downgrade -t x86_64-unknown-linux-musl,x86_64-unknown-linux-gnu