import React from "react";
import "./styles/_boardMembersStyles.scss";
import { photos } from "../../resources";

/**
 * @description Board Members Page
 * @constructor
 */
const BoardMembersPage = () => {
  return (
    <div>
      <section id="team" className="text-center section">
        <div className="container">
          <h2>
            <span className="highlight_secondary">Our</span> Team
          </h2>

          <h5>
            Our people are our greatest asset and biggest differentiator.
            <br />
            They also believe in having a lot of fun along the way.
          </h5>

          <div className="hr big_size_hr invisible_hr">
            <i className="fa fa-" />
          </div>

          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="team">
                <div className="team-image">
                  <a href="#">
                    <img
                      alt="dummyImage"
                      src={photos.dummyImage}
                      className="img-circle img-responsive"
                    />
                  </a>
                  <div className="team-links">
                    <div className="team-links-list">
                      <a href="#" target="_blank">
                        <i className="fa fa-envelope" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-linked" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <div className="team-name">
                    <a href="#">
                      <h5>Jose Knutson</h5>
                    </a>
                  </div>
                  <div className="team-role">Co-founder</div>
                  <div className="team-description" />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="team">
                <div className="team-image">
                  <a href="#">
                    <img
                      alt="dummyImage"
                      src={photos.dummyImage}
                      className="img-circle img-responsive"
                    />
                  </a>
                  <div className="team-links">
                    <div className="team-links-list">
                      <a href="#" target="_blank">
                        <i className="fa fa-envelope" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-linked" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <div className="team-name">
                    <a href="#">
                      <h5>Mary Ramos</h5>
                    </a>
                  </div>
                  <div className="team-role">Co-founder</div>
                  <div className="team-description" />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="team">
                <div className="team-image">
                  <a href="#">
                    <img
                      alt="dummyImage"
                      src={photos.dummyImage}
                      className="img-circle img-responsive"
                    />
                  </a>
                  <div className="team-links">
                    <div className="team-links-list">
                      <a href="#" target="_blank">
                        <i className="fa fa-envelope" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-linked" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <div className="team-name">
                    <a href="#">
                      <h5>Michael Alexander</h5>
                    </a>
                  </div>
                  <div className="team-role">Co-founder</div>
                  <div className="team-description" />
                </div>
              </div>
            </div>
          </div>

          <div className="hr invisible_hr">
            <i className="fa fa-" />
          </div>

          <div className="row">
            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="team">
                <div className="team-image">
                  <a href="#">
                    <img
                      alt="dummyImage"
                      src={photos.dummyImage}
                      className="img-circle img-responsive"
                    />
                  </a>
                  <div className="team-links">
                    <div className="team-links-list">
                      <a href="#" target="_blank">
                        <i className="fa fa-envelope" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-linked" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <div className="team-name">
                    <h5>Herman Mach</h5>
                  </div>
                  <div className="team-role">Software Developer</div>
                  <div className="team-description" />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="team">
                <div className="team-image">
                  <a href="#">
                    <img
                      alt="dummyImage"
                      src={photos.dummyImage}
                      className="img-circle img-responsive"
                    />
                  </a>
                  <div className="team-links">
                    <div className="team-links-list">
                      <a href="#" target="_blank">
                        <i className="fa fa-envelope" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-linked" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <div className="team-name">
                    <h5>Joyce Wagner</h5>
                  </div>
                  <div className="team-role">Designer</div>
                  <div className="team-description" />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="team">
                <div className="team-image">
                  <a href="#">
                    <img
                      alt="dummyImage"
                      src={photos.dummyImage}
                      className="img-circle img-responsive"
                    />
                  </a>
                  <div className="team-links">
                    <div className="team-links-list">
                      <a href="#" target="_blank">
                        <i className="fa fa-envelope" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-linked" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <div className="team-name">
                    <h5>Donald Speth</h5>
                  </div>
                  <div className="team-role">Account manager</div>
                  <div className="team-description" />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="team">
                <div className="team-image">
                  <a href="#">
                    <img
                      alt="dummyImage"
                      src={photos.dummyImage}
                      className="img-circle img-responsive"
                    />
                  </a>
                  <div className="team-links">
                    <div className="team-links-list">
                      <a href="#" target="_blank">
                        <i className="fa fa-envelope" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-linked" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <div className="team-name">
                    <h5>Frank McGuire</h5>
                  </div>
                  <div className="team-role">Programmer</div>
                  <div className="team-description" />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="team">
                <div className="team-image">
                  <a href="#">
                    <img
                      alt="dummyImage"
                      src={photos.dummyImage}
                      className="img-circle img-responsive"
                    />
                  </a>
                  <div className="team-links">
                    <div className="team-links-list">
                      <a href="#" target="_blank">
                        <i className="fa fa-envelope" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-linked" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <div className="team-name">
                    <h5>Natasha Miley</h5>
                  </div>
                  <div className="team-role">Journalist</div>
                  <div className="team-description" />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="team">
                <div className="team-image">
                  <a href="#">
                    <img
                      alt="dummyImage"
                      src={photos.dummyImage}
                      className="img-circle img-responsive"
                    />
                  </a>
                  <div className="team-links">
                    <div className="team-links-list">
                      <a href="#" target="_blank">
                        <i className="fa fa-envelope" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-linked" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fa fa-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <div className="team-name">
                    <h5>Lavona Smith</h5>
                  </div>
                  <div className="team-role">Photographer</div>
                  <div className="team-description" />
                </div>
              </div>
            </div>
          </div>

          <div className="hr big_size_hr invisible_hr">
            <i className="fa fa-" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BoardMembersPage;
