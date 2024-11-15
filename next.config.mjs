import createMDX from '@next/mdx'
import redirect from "./next-redirect.js"

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    redirects: redirect,
}

import { withContentlayer } from "next-contentlayer2";

const withMDX = createMDX()

export default withContentlayer(withMDX(nextConfig))