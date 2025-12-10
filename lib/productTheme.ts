/**
 * Product Theme Configuration
 * Centralized color and styling config for product landing pages
 */

export interface ProductTheme {
    // Gradient backgrounds
    gradient: string

    // Text colors
    primaryText: string
    primaryTextHover: string
    accent: string

    // Border colors
    borderHover: string

    // How It Works section
    lineGradientFrom: string
    lineGradientTo: string
    lineGradientFromDark: string
    lineGradientToDark: string
    shadowColor: string
}

const themes: Record<string, ProductTheme> = {
    custo: {
        gradient: 'bg-custo-gradient',
        primaryText: 'text-custo-blue',
        primaryTextHover: '',
        accent: 'text-custo-blue dark:text-custo-blue-light',
        borderHover: 'hover:border-custo-blue dark:hover:border-custo-blue-light',
        lineGradientFrom: 'from-custo-blue-light',
        lineGradientTo: 'to-custo-blue',
        lineGradientFromDark: 'dark:from-custo-blue-light',
        lineGradientToDark: 'dark:to-custo-blue',
        shadowColor: 'dark:shadow-custo-blue/50',
    },
    sparks: {
        gradient: 'bg-sparks-gradient',
        primaryText: 'text-sparks-orange',
        primaryTextHover: 'hover:text-sparks-yellow',
        accent: 'text-sparks-orange dark:text-sparks-yellow',
        borderHover: 'hover:border-sparks-orange dark:hover:border-sparks-yellow',
        lineGradientFrom: 'from-sparks-yellow',
        lineGradientTo: 'to-sparks-orange',
        lineGradientFromDark: 'dark:from-sparks-yellow',
        lineGradientToDark: 'dark:to-sparks-orange',
        shadowColor: 'dark:shadow-sparks-orange/50',
    },
    // Default (Certo) theme
    certo: {
        gradient: 'bg-certo-gradient',
        primaryText: 'text-certo-purple-dark',
        primaryTextHover: '',
        accent: 'text-purple-600 dark:text-purple-400',
        borderHover: 'hover:border-purple-500 dark:hover:border-purple-400',
        lineGradientFrom: 'from-purple-500',
        lineGradientTo: 'to-purple-600',
        lineGradientFromDark: 'dark:from-purple-400',
        lineGradientToDark: 'dark:to-purple-500',
        shadowColor: 'dark:shadow-purple-500/50',
    },
}

/**
 * Get theme configuration for a product
 * @param productId - The product identifier (e.g., 'custo', 'sparks', 'certo')
 * @returns ProductTheme object with all styling classes
 */
export const getProductTheme = (productId?: string): ProductTheme => {
    if (productId && productId in themes) {
        return themes[productId]
    }
    return themes.certo // default fallback
}
