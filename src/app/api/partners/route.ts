import { db } from '@/lib/firebaseAdmin';
import { NextResponse } from 'next/server';

export async function GET() {
  console.log('GET request received');

  try {
    const partners = await db.collection('partners').get();
    const partnerData = partners.docs.map((doc) => doc.data());
    
    return NextResponse.json(partnerData, { status: 200 });
    
  } catch (err) {
    console.error('Failed processing event:', err);
    // ✅ Still return 200 so Clerk doesn’t retry
    return new NextResponse('Processed with errors', { status: 200 });
  }

}
