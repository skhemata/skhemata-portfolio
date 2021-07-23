import { SkhemataBase, html, CSSResult } from '@skhemata/skhemata-base';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@riovir/wc-fontawesome';
// Import custom style elements
import { SkhemataPortfolioStyle } from './style/SkhemataPortfolioStyle';

export class SkhemataPortfolio extends SkhemataBase {
  static get scopedElements() {
    return {
      'fa-icon': FontAwesomeIcon,
    };
  }

  static get styles() {
    return <CSSResult[]>[...super.styles, SkhemataPortfolioStyle];
  }

  render() {
    const projects = this.configData?.map(
      (element: any) => html`
        <div class="column is-one-third work-column">
          <div class="work-box">
            <a
              href="${element.siteLink}"
              class="work-item square-work-item"
              target="_blank"
            >
              <img src="${element.imageUrl}" alt="" />
              <div class="work-overlay"></div>
              <div class="work-info">
                <div class="cta-text">
                  <div class="project-text project-title">
                    <p>${element.title}</p>
                  </div>

                  <div class="project-text project-desc">
                    <p>${element.projectDescription}</p>
                  </div>

                  <div class="project-text project-link">
                    <p>
                      View Site
                      <i
                        ><fa-icon
                          .icon=${faArrowCircleRight}
                          size="2x"
                        ></fa-icon
                      ></i>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      `
    );

    return html`<div class="work-template">
      <div id="work-list" class="section is-medium">
        <div class="container">
          <div class="work-grid">
            <div class="columns is-multiline">
              <!-- Default Layout -->

              <!-- new portfolio items -->
              ${projects}
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }
}
