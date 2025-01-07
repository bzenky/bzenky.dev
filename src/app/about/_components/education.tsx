export function Education() {
  return (
    <div>
      <h2 className="text-violet-500 font-bold text-xl mt-8">Education Background</h2>

      <div className="leading-8 font-medium">
        <h3 className="text-sky-50 font-bold mt-6 text-lg">Technologist - System Analysis and Development</h3>
        <div>
          <a
            href="https://www.unopar.com.br/"
            target="_blank"
            rel="noreferrer"
            className="text-sky-50 underline underline-offset-4 hover:text-sky-300 transition-colors"
          >
            UNOPAR
          </a>
          <span> · Online degree</span>
          <span className="block">2021 - 2022</span>
        </div>
      </div>

      <div className="leading-8 font-medium">
        <h3 className="text-sky-50 font-bold mt-6 text-lg">MBA in Controlling and Finance</h3>
        <div>
          <a
            href="https://baraodemaua.br/"
            target="_blank"
            rel="noreferrer"
            className="text-sky-50 underline underline-offset-4 hover:text-sky-300 transition-colors"
          >
            Centro Universitário Barão de Mauá
          </a>
          <span> · Online degree</span>
          <span className="block">2018 - 2019</span>
        </div>
      </div>

      <div className="leading-8 font-medium">
        <h3 className="text-sky-50 font-bold mt-6 text-lg">Bachelor in Accounting</h3>
        <div>
          <a
            href="https://uenp.edu.br/"
            target="_blank"
            rel="noreferrer"
            className="text-sky-50 underline underline-offset-4 hover:text-sky-300 transition-colors"
          >
            UENP
          </a>
          <span> · Cornélio Procópio - PR - BR</span>
          <span className="block">2014 - 2017</span>
        </div>
      </div>
    </div>
  )
}