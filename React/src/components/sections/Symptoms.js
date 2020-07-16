import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const sectionHeader = {
      title: 'Quisque egestas diam in arcu quis euismod — scelerisque purus semper eget duis at risus viverra.',
      paragraph: ''
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >

          <div className={innerClasses}>

            <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile">
                <h3 className="mt-0 mb-16 reveal-from-left" data-reveal-container=".split-item">
                  Boost Your Immune System

                </h3>
                <p className="m-0 reveal-from-left" data-reveal-container=".split-item" data-reveal-delay="100">
                Our individual immunity is paramount for the next six months to a year, until a vaccine or cure for COVID-19 is publicly available. One could go so far to say that this deadly contagion has re-emphasised the importance of immunity for each one of us.<br/><br/>                                                                                                The key to maintaining a healthy immune system lies in a few good lifestyle choices. A healthy balanced diet, adequate sleep, mindful living through yoga, meditation and regular exercise are imperative to boost our immune system. Consuming vitamin rich foods and specific immunity uplifting items such as turmeric, almonds, etc can really help ensure our body’s natural defence mechanism.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile illustration-element-04 reveal-from-right',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item"
                data-reveal-delay="200">
                <Image
                  src={require('./../../assets/images/sf1.jpeg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />

              </div>
            </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-right" data-reveal-container=".split-item">
                    Prevention
                  </h3>
                  <p className="m-0 reveal-from-right" data-reveal-container=".split-item" data-reveal-delay="100">
                   Regularly and thoroughly clean your hands with an alcoholbased hand rub or wash them with soap and water.
                  <br/>
                   Maintain at least 1 metre (3 feet) distance between yourself and
                   anyone who is coughing or sneezing.
                   Why? When someone coughs or sneezes they spray small liquid
                   droplets from their nose or mouth which may contain virus. If you
                   are too close, you can breathe in the droplets, including the
                   COVID-19 virus if the person coughing has the disease.<br/>
                   Avoid touching eyes, nose and mouth.
                   Why? Hands touch many surfaces and can pick up viruses.
                   Once contaminated, hands can transfer the virus to your eyes,
                   nose or mouth. From there, the virus can enter your body and
                   can make you sick.

                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile illustration-element-03 reveal-from-left',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200">
                  <Image
                    src={require('./../../assets/images/sym3.jpg')}
                    alt="Features split 02"
                    width={500}
                    height={300} />

                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-left" data-reveal-container=".split-item">
                    Symptoms
                  </h3>
                  <p className="m-0 reveal-from-left" data-reveal-container=".split-item" data-reveal-delay="100">
                  The  most  common  symptoms  of  COVID-19  are  fever,  tiredness,  and dry   cough.   Some   patients   may   have   aches   and   pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually  mild  and  begin  gradually.  Some  people  become  infected  but don’t  develop  any  symptoms  and  don't  feel  unwell. <br/><br/> Most  people (about   80%)   recover   from   the   disease   without   needing   special treatment.  Around  1  out  of  every  6  people  who  gets COVID-19 becomes  seriously  ill  and  develops  difficulty  breathing.  Older  people, and those with underlying medical problems like high blood pressure, heart problems or diabetes, are more likely to develop serious illness. People with fever, cough and difficulty breathing should seek medical attention.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile illustration-element-04 reveal-from-right',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200">
                  <Image
                    src={require('./../../assets/images/sf3.jpeg')}
                    alt="Features split 03"
                    width={528}
                    height={396} />

                </div>
              </div>



            </div>
          </div>
        
      </section>
    );
  }
}

const imgStyle = {
  position: 'absolute',
  width: '118.18%',
  maxWidth: '118.18%',
  top: '-7.07%',
  left: '-9.09%'
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
