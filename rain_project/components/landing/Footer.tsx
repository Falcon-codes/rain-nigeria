import { Bot, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Bot className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">RAIN Reborn</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              World-Class Training for the Next Generation of AI Engineers.
            </p>
          </div>
          <div>
            <h4 className="font-semibold font-headline mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="#courses" className="text-sm text-muted-foreground hover:text-primary">Courses</Link></li>
              <li><Link href="#success-stories" className="text-sm text-muted-foreground hover:text-primary">Graduates</Link></li>
              <li><Link href="#faculty" className="text-sm text-muted-foreground hover:text-primary">Faculty</Link></li>
              <li><Link href="#apply" className="text-sm text-muted-foreground hover:text-primary">Apply</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold font-headline mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
                <p className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-1 shrink-0 text-muted-foreground" />
                    <span>20 Oba Adesida Road, Estate Opposite EFCC Office, Iyaganku Quarters, Ibadan</span>
                </p>
                 <p className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <a href="mailto:info@rainigeria.com" className="text-muted-foreground hover:text-primary">info@rainigeria.com</a>
                </p>
                 <p className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <a href="tel:+23412345678" className="text-muted-foreground hover:text-primary">+234 (123) 456-7890</a>
                </p>
            </div>
          </div>
           <div>
            <h4 className="font-semibold font-headline mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-3">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="bg-secondary" />
                <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RAIN Nigeria. All Rights Reserved. A conceptual redesign.</p>
        </div>
      </div>
    </footer>
  );
}
