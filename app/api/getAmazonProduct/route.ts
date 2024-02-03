// pages/api/getAmazonProductInfo.js
import scrapeAmazonProduct from '@/utils/AmazonScraper';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) =>  {
  const { link } = await req.json();
  console.log(link);
  
  if (!link) {
    return NextResponse.json({ error: 'Missing amazonLink parameter' },{status: 400});
  }

  if (!link.startsWith('https://www.amazon.in/')) {
    return NextResponse.json({ error: 'Invalid amazonLink parameter' },{status: 400});
  }

  try {
    const productInfo = await scrapeAmazonProduct(link);
    if (productInfo) {
      return NextResponse.json(productInfo,{status: 200});
    } else {
      return NextResponse.json({ error: 'Failed to fetch Amazon product information' }, {status: 500});
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to scrape Amazon product information' }, {status: 500});
  }
}
