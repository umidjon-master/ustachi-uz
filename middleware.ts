import createMiddleware from 'next-intl/middleware'

const intlMiddleware = createMiddleware({
	locales: ['en', 'ru', 'uz', 'tr'],
	defaultLocale: 'uz',
})

export default intlMiddleware

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/(api|trpc)(.*)'],
}
