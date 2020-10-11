import React from 'react';


const BottomModal = () => {
    return (
        <div>
            {/*-- Customizer --*/}
            <div className="customizer">
                <a href="#modal-customizer"
                   className="btn btn-warning btn-lg btn-icon-only rounded-circle text-white hover-scale-110 shadow-lg mr-3"
                   data-toggle="modal">
                    <span className="btn-inner--icon"><i className="far fa-palette"></i></span>
                </a>
                <a href="#"
                   className="btn btn-lg btn-white btn-icon-only rounded-circle hover-scale-110 shadow-lg mr-3 d-none d-lg-inline-block">
                    <span className="btn-inner--icon"><i className="far fa-question"></i></span>
                </a>
                <a href="#" target="_blank"
                   className="btn btn-lg btn-white btn-icon-only rounded-circle hover-scale-110 shadow-lg d-none d-lg-inline-block">
                    <span className="btn-inner--icon"><i className="far fa-shopping-basket"></i></span>
                </a>
            </div>
            {/*-- Modal --*/}
            <div className="modal fade fixed-right" id="modal-customizer" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-vertical" role="document">
                    <form className="modal-content" id="form-customizer">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                    data-toggle="tooltip" data-placement="left" title="Close Customizer">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="text-center mx-auto mt-4 mb-5" style={{width: 80}}>
                                <img alt="Image placeholder" src="../../assets/img/icons/essential/detailed/Click.svg"
                                     className="svg-inject img-fluid" />
                            </div>
                            <h5 className="text-center mb-2">Choose (your) Purpose</h5>
                            <p className="text-center mb-4">
                                Customize your preview experience by selecting skin colors and modes.
                            </p>
                            <hr className="mb-4" />
                                <h6 className="mb-1">Skin color</h6>
                                <p className="small text-muted mb-3">
                                    Set a new theme color palette.
                                </p>
                                <div className="btn-group-toggle row mx-0 mb-5" data-toggle="buttons">
                                    <label className="btn btn-sm btn-neutral active col mb-2">
                                        <input type="radio" name="skin" value="default" checked />
                                            Default
                                    </label>
                                    <label className="btn btn-sm btn-neutral col-6 mb-2 mr-0">
                                        <input type="radio" name="skin" value="blue" />
                                            Blue
                                    </label>
                                </div>
                                <h6 className="mb-1">Skin mode</h6>
                                <p className="small text-muted mb-3">
                                    Set the theme's mode: light or dark.
                                </p>
                                <div className="btn-group-toggle row mx-0 mb-4" data-toggle="buttons">
                                    <label className="btn btn-sm btn-neutral active flex-fill mb-2 mr-2">
                                        <input type="radio" name="mode" value="light" checked />
                                            <i className="far fa-sun mr-2"></i> Light
                                    </label>
                                    <label className="btn btn-sm btn-neutral flex-fill mb-2 mr-2">
                                        <input type="radio" name="mode" value="dark" />
                                            <i className="far fa-moon mr-2"></i> Dark
                                    </label>
                                </div>
                        </div>
                        <div className="modal-footer border-0">
                            <button type="submit" className="btn btn-block btn-primary mt-auto">
                                Preview
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default BottomModal;