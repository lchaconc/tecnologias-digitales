//pdf/buenas-practicas.pdf

export default function ViewPdf(params) {
  return (
    <div className="container">
      
      <div className="row">
        <div className="col-12">
          <object
            data="pdf/buenas-practicas.pdf"
            type="application/pdf"
            width="100%"
            height="500px"
          >
            <p className="alert alert-danger">Su navegador no puede mostrar PDF.</p>
            <a
              href="pdf/buenas-practicas.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar PDF
            </a>
          </object>
        </div>
      </div>
    </div>
  );
}
