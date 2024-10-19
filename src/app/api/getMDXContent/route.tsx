import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
        return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'src/app/docs/content', `${slug}.mdx`);

    try {
        const content = fs.readFileSync(filePath, 'utf8');
        return NextResponse.json({ content });
    } catch (error) {
        console.error('Error reading file:', error);
        return NextResponse.json({ error: 'Failed to read content' }, { status: 500 });
    }
}