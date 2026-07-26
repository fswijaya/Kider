import PageHeader from '@/components/PageHeader';

const facilities = [
  { color: 'primary', icon: 'fa-bus-alt', name: 'School Bus' },
  { color: 'success', icon: 'fa-futbol', name: 'Playground' },
  { color: 'warning', icon: 'fa-home', name: 'Healthy Canteen' },
  { color: 'info', icon: 'fa-chalkboard-teacher', name: 'Positive Learning' },
];

export default function FacilityPage() {
  return (
    <>
      <PageHeader title="Facilities" breadcrumb="Facilities" />

      {/* Facilities */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h1 className="mb-3">School Facilities</h1>
            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
          </div>
          <div className="row g-4">
            {facilities.map((f, idx) => (
              <div key={idx} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={`${0.1 + idx * 0.2}s`}>
                <div className="facility-item">
                  <div className={`facility-icon bg-${f.color}`}>
                    <span className={`bg-${f.color}`}></span>
                    <i className={`fa ${f.icon} fa-3x text-${f.color}`}></i>
                    <span className={`bg-${f.color}`}></span>
                  </div>
                  <div className={`facility-text bg-${f.color}`}>
                    <h3 className={`text-${f.color} mb-3`}>{f.name}</h3>
                    <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
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
