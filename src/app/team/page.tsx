import PageHeader from '@/components/PageHeader';

const teamMembers = [
  { img: 'team-1.jpg' },
  { img: 'team-2.jpg' },
  { img: 'team-3.jpg' },
  { img: 'team-1.jpg' },
  { img: 'team-2.jpg' },
  { img: 'team-3.jpg' },
];

export default function TeamPage() {
  return (
    <>
      <PageHeader title="Teachers" breadcrumb="Teachers" />

      {/* Team */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h1 className="mb-3">Popular Teachers</h1>
            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
          </div>
          <div className="row g-4">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + (idx % 3) * 0.2}s`}>
                <div className="team-item position-relative">
                  <img className="img-fluid rounded-circle w-75" src={`/img/${member.img}`} alt="Team Member" />
                  <div className="team-text">
                    <h3>Full Name</h3>
                    <p>Designation</p>
                    <div className="d-flex align-items-center">
                      <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></a>
                      <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
