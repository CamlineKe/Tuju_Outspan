'use client';

import { useState } from 'react';

import { Check, Link2, MessageCircle } from 'lucide-react';

import Button from '@/app/components/ui/Button';
import { absolutePageUrl } from '@/app/lib/utils/seo';
import { buildWhatsAppLink } from '@/app/lib/utils/whatsapp';

interface PostShareProps {
  title: string;
  slug: string;
}

type CopyStatus = 'idle' | 'copied' | 'error';

export default function PostShare({ title, slug }: PostShareProps) {
  const [status, setStatus] = useState<CopyStatus>('idle');
  const url = absolutePageUrl(`/blog/${slug}`);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setStatus('copied');
    } catch {
      setStatus('error');
    }
    window.setTimeout(() => setStatus('idle'), 2500);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button
        href={buildWhatsAppLink(`Check this out: ${title} ${url}`)}
        variant="outline"
        size="small"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        Share on WhatsApp
      </Button>
      <Button variant="outline" size="small" onClick={onCopy}>
        {status === 'copied' ? (
          <Check className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Link2 className="h-4 w-4" aria-hidden="true" />
        )}
        {status === 'copied' ? 'Copied' : status === 'error' ? 'Copy failed' : 'Copy Link'}
      </Button>
    </div>
  );
}
