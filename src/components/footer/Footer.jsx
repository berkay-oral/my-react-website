import React from 'react'

function Footer() {
    const footerBgColor={backgroundColor:"black"}
    return (
        <footer id="footer" className="footer py-4" style={footerBgColor}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="m-0 text-center text-white">&copy: 2021 The Berkay </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
