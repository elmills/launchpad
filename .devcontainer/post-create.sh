#!/usr/bin/env bash

echo "=== Launchpad - Dev Environment Setup ==="

# Install Claude Code if not already present
if ! command -v claude &> /dev/null; then
    echo "Installing Claude Code CLI..."
        npm install -g @anthropic-ai/claude-code --quiet
            echo "Claude Code installed"
            else
                echo "Claude Code already installed"
                fi

                # Ensure GitHub CLI is available and authenticated
                if command -v gh &> /dev/null; then
                    echo "GitHub CLI is available"
                        # Check if authenticated
                            if ! gh auth status 2>/dev/null; then
                                    echo "Note: GitHub CLI is not authenticated. Run 'gh auth login' to authenticate."
                                        fi
                                        else
                                            echo "GitHub CLI not found - it should have been installed by devcontainer features"
                                            fi

                                            echo "=== Setup complete! ==="
                                            echo "Environment ready for Launchpad development"
                                            echo "Use 'npm start' or open index.html in a live server to get started"
