---
title: "Managing my setups with Nix"
description: "How I use Nix to manage my Mac and Linux machines"
pubDate: "2025-12-24 14:00:00"
draft: false
icon: "Cog"
---

I have been using [Nix](https://nix.dev/) for a while now to manage my development environments and system configurations. In this post, I want to share my high-level approach and the benefits I've experienced.

## What is Nix?

Nix is a powerful package manager and build system that brings reproducibility and reliability to software management. Unlike traditional package managers, Nix stores packages in isolated locations, allowing multiple versions to coexist without conflicts. This means I can have different versions of the same dependency for different projects without any issues.

The real power of Nix shines with [NixOS](https://nixos.org/), which uses Nix to describe the entire operating system configuration declaratively. My entire system configuration becomes code that I can version control, review, and reproduce.

## My Setup

I maintain my Nix configuration in a public repository: [github.com/thekorn/nix-config](https://github.com/thekorn/nix-config)

The configuration manages multiple machines:

- **MacBooks** - My personal Macbook and Studio machine running macOS via nix-darwin
- **Work machine** - A separate work configuration with different user and settings
- **Linux servers** - Running NixOS with microvms for containerized workloads

Currently, I use Nix to manage:

- **[nix-darwin](https://github.com/LnL7/nix-darwin)** - For macOS system configuration
- **[Home Manager](https://github.com/nix-community/home-manager)** - For user-level applications and dotfiles
- **Development environments** - My editor (Neovim, Zed, Ghostty), tools (Tmux, LazyGit, FZF, Ripgrep), and languages (Zig, Dart, Java)

Some highlights from my config:

- **Terminal setup** - Zsh with Oh My Posh, Tmux, LazyGit, FZF for fuzzy finding
- **AI tooling** - Claude Code, GPTCommit, and LLM integration for AI-assisted development
- **Editor** - Neovim configured with lazy.nvim, plus Zed for collaborative editing
- **File management** - Eza, Bat, Zoxide for a modern CLI experience

I split configurations into shared modules (common tools, programs) and host-specific settings, making it easy to maintain consistency across machines while allowing per-machine customization.

## Why Nix?

The main reasons I chose Nix:

1. **Reproducibility** - If it works on my machine, it will work on any machine with my configuration
2. **Rollbacks** - If an update breaks something, I can easily roll back to a previous state
3. **Isolation** - No more "it works on my machine" due to conflicting dependencies
4. **Declarative** - My infrastructure as code means I can recreate my setup from scratch

## Getting Started

If you're interested in trying Nix, I recommend starting with:

- [nix.dev documentation](https://nix.dev/) for learning the fundamentals
- [NixOS Wiki](https://nix.wiki/) for community knowledge
- My configuration at [github.com/thekorn/nix-config](https://github.com/thekorn/nix-config) for inspiration

Nix has a learning curve, but the investment pays off in reliability and peace of mind.
