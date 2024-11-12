import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="fundo-preto1">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <img src="/page-0001.jpg" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="fundo-preto2">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <img src="page-0002.jpg" className="img-fluid padding-100" />
              <img src="page-0003.jpg" className="img-fluid padding-100" />
            </div>
          </div>
        </div>
      </div>
      <div className="fundo-preto2">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <img src="gorete.png" className="img-fluid padding-100" />
            </div>
          </div>
          <div className="row">
            <div className="col text-center mb-5">
              <a href="https://queer.ig.com.br/2023-07-04/temos-historias-que-ninguem-tem--diz-diretor-de-curta-lgbt--do-piaui.html.amp">
                <h1>link para materia</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="fundo-roxo padding-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <img src="page-0004.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
