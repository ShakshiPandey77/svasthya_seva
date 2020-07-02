import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class Testimonial extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'testimonial section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'testimonial-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Loved by users worldwide',
      paragraph: ''
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <Image
                      src={require('./../../assets/images/stars-5.svg')}
                      alt="Rating"
                      width={96}
                      height={16} />
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.
                      </p>
                  </div>
                  <div className="testimonial-item-footer pt-24">
                    <div className="testimonial-item-image">
                      <Image src={require('./../../assets/images/testimonial-image-01.jpg')}
                        alt="Testimonial 01"
                        width={40}
                        height={40} />
                    </div>
                    <div className="testimonial-item-name text-xs fw-500 text-color-high">
                      Kendra Kinson
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="150">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <Image
                      src={require('./../../assets/images/stars-5.svg')}
                      alt="Rating"
                      width={96}
                      height={16} />
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.
                      </p>
                  </div>
                  <div className="testimonial-item-footer pt-24">
                    <div className="testimonial-item-image">
                      <Image src={require('./../../assets/images/testimonial-image-02.jpg')}
                        alt="Testimonial 02"
                        width={40}
                        height={40} />
                    </div>
                    <div className="testimonial-item-name text-xs fw-500 text-color-high">
                      Jeffrey Harris
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="300">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <Image
                      src={require('./../../assets/images/stars-5.svg')}
                      alt="Rating"
                      width={96}
                      height={16} />
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.
                      </p>
                  </div>
                  <div className="testimonial-item-footer pt-24">
                    <div className="testimonial-item-image">
                      <Image src={require('./../../assets/images/testimonial-image-03.jpg')}
                        alt="Testimonial 03"
                        width={40}
                        height={40} />
                    </div>
                    <div className="testimonial-item-name text-xs fw-500 text-color-high">
                      Emilia Jovic
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;