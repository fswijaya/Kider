import PageHeader from '@/components/PageHeader';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export default function TestimonialPage() {
  return (
    <>
      <PageHeader title="Testimonial" breadcrumb="Testimonial" />

      {/* Testimonial */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h1 className="mb-3">Our Clients Say!</h1>
            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
          </div>
          <TestimonialCarousel />
        </div>
      </div>
    </>
  );
}
