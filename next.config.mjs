import createMDX from '@next/mdx'

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

import { withContentlayer } from "next-contentlayer2";

const withMDX = createMDX()

export default withContentlayer(withMDX(nextConfig))