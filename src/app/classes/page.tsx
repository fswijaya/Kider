import PageHeader from '@/components/PageHeader';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const classes = [
  { img: 'classes-1.jpg', title: 'Art & Drawing' },
  { img: 'classes-2.jpg', title: 'Color Management' },
  { img: 'classes-3.jpg', title: 'Athletic & Dance' },
  { img: 'classes-4.jpg', title: 'Language & Speaking' },
  { img: 'classes-5.jpg', title: 'Religion & History' },
  { img: 'classes-6.jpg', title: 'General Knowledge' },
];

export default function ClassesPage() {
  return (
    <>
      <PageHeader title="Classes" breadcrumb="Classes" />

      {/* Classes */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h1 className="mb-3">School Classes</h1>
            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
          </div>
          <div className="row g-4">
            {classes.map((cls, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + (idx % 3) * 0.2}s`}>
                <div className="classes-item">
                  <div className="bg-light rounded-circle w-75 mx-auto p-3">
                    <img className="img-fluid rounded-circle" src={`/img/${cls.img}`} alt={cls.title} />
                  </div>
                  <div className="bg-light rounded p-4 pt-5 mt-n5">
                    <a className="d-block text-center h3 mt-3 mb-4" href="#">{cls.title}</a>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        <img className="rounded-circle flex-shrink-0" src="/img/user.jpg" alt="Teacher" style={{ width: '45px', height: '45px' }} />
                        <div className="ms-3">
                          <h6 className="text-primary mb-1">Jhon Doe</h6>
                          <small>Teacher</small>
                        </div>
                      </div>
                      <span className="bg-primary text-white rounded-pill py-2 px-3">$99</span>
                    </div>
                    <div className="row g-1">
                      <div className="col-4">
                        <div className="border-top border-3 border-primary pt-2">
                          <h6 className="text-primary mb-1">Age:</h6>
                          <small>3-5 Years</small>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="border-top border-3 border-success pt-2">
                          <h6 className="text-success mb-1">Time:</h6>
                          <small>9-10 AM</small>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="border-top border-3 border-warning pt-2">
                          <h6 className="text-warning mb-1">Capacity:</h6>
                          <small>30 Kids</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Appointment */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="bg-light rounded">
            <div className="row g-0">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="h-100 d-flex flex-column justify-content-center p-5">
                  <h1 className="mb-4">Make Appointment</h1>
                  <form>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <div className="form-floating">
                          <input type="text" className="form-control border-0" id="gname" placeholder="Gurdian Name" />
                          <label htmlFor="gname">Gurdian Name</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating">
                          <input type="email" className="form-control border-0" id="gmail" placeholder="Gurdian Email" />
                          <label htmlFor="gmail">Gurdian Email</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating">
                          <input type="text" className="form-control border-0" id="cname" placeholder="Child Name" />
                          <label htmlFor="cname">Child Name</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating">
                          <input type="text" className="form-control border-0" id="cage" placeholder="Child Age" />
                          <label htmlFor="cage">Child Age</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{ height: '100px' }}></textarea>
                          <label htmlFor="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: '400px' }}>
                <div className="position-relative h-100">
                  <img className="position-absolute w-100 h-100 rounded" src="/img/appointment.jpg" alt="Appointment" style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
