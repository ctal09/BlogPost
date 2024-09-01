const Footer =()=>{
    return <>


  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mb-0 border-top text-bg-dark">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
      </a>
      <span className="mb-3 mb-md-0 text-white">© 2024 Company, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end me-4 list-unstyled d-flex">
      <li className="ms-3"><a className="text-white" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg>T</a></li>
      <li className="ms-3"><a className="text-white" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg>I</a></li>
      <li className="ms-3"><a className="text-white" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg>F</a></li>
    </ul>
  </footer>

    
    
    
    </>
}

export default Footer;