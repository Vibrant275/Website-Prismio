import type {MDXComponents} from 'mdx/types'
import DocsHomeButton from "@/components/buttons/DocsHomeButton";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {

        DocsHomeButton: ({title, description, href, icon}) => (
            <DocsHomeButton title={title} description={description} href={href} icon={icon}/>
        ),

        h1: ({children}) =>
            <h1 style={{
                fontSize: '34px',
                fontWeight: 'bold'
            }}>{children}</h1>,

        h2: ({children}) =>
            <h2 style={{
                fontSize: '22px',
            }}>{children}</h2>,

        ...components,
    };
}