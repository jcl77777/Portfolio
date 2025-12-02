/**
 * Type definitions for product landing pages
 * These interfaces define the structure for data-driven product landing pages
 */

export interface LocalizedText {
  'zh-TW': string
  'en': string
}

export interface HeroSection {
  title: LocalizedText
  subtitle: LocalizedText
  description: LocalizedText
  features: Array<{
    icon: string
    text: LocalizedText
  }>
  ctaPrimary: {
    text: LocalizedText
    url: string
  }
  ctaSecondary?: {
    text: LocalizedText
    anchor: string
  }
  backgroundGradient?: string  // e.g., 'bg-certo-gradient'
  logoComponent?: string  // e.g., 'CertoWordmark'
}

export interface ProblemItem {
  icon: string
  title: LocalizedText
  description: LocalizedText
}

export interface ProblemsSection {
  title: LocalizedText
  items: ProblemItem[]
}

export interface SolutionItem {
  icon: string
  title: LocalizedText
  features: LocalizedText[]
  highlight: LocalizedText
}

export interface SolutionsSection {
  title: LocalizedText
  items: SolutionItem[]
}

export interface HowItWorksStep {
  number: string
  icon: string
  title: LocalizedText
  description: LocalizedText
}

export interface HowItWorksSection {
  title: LocalizedText
  steps: HowItWorksStep[]
}

export interface FAQItem {
  question: LocalizedText
  answer: LocalizedText
}

export interface FAQSection {
  title: LocalizedText
  items: FAQItem[]
}

export interface ProductLandingPage {
  hero: HeroSection
  problems?: ProblemsSection
  solutions?: SolutionsSection
  howItWorks?: HowItWorksSection
  faq?: FAQSection
  // SEO metadata
  meta: {
    title: LocalizedText
    description: LocalizedText
    ogTitle: LocalizedText
    ogDescription: LocalizedText
    ogImage?: string
  }
}
