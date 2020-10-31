import React from 'react'

const Navbar = () => {
    return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className = "container">
                <a class="navbar-brand" href="#">Single Page Aplication</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" >
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">
                                Home 
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                About
                            </a>
                        </li>

                        </ul>

                </div>
        </div>
    </nav>
    )
}

export default Navbar
