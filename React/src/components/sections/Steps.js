import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Timeline from '../elements/Timeline';
import TimelineItem from '../elements/TimelineItem';
import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class Steps extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'roadmap section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'roadmap-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: ' Have Covid Symptoms ',
      paragraph: 'Steps To Follow !!!.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <Timeline>
              <TimelineItem title="Fever temperature above 37.8 degree celsius difficulty breathing,body ache,cough , headache etc." >
                Hydrate properly and maintain personal hygiene
              </TimelineItem>
              <TimelineItem title="sore throat have loss of sense of smell and taste fatigue , nausea , running nose etc">
              Seek a consultation with a doctor
              </TimelineItem>
              <TimelineItem title="symptoms getting worse">
                Contact the helpline
              </TimelineItem>
              <TimelineItem title="have questions about your health">
                Contact the helpline
              </TimelineItem>
              <TimelineItem title="testing">
              Decisions about testing are made by the local health department.
              </TimelineItem>
              <TimelineItem title="Covid testing To Be Done??">
              You can get the covid test done at the testing centres in your city
              <br/>
              <Link to="/testingCenter/" onClick={this.closeMenu}>Testing Center</Link>

              </TimelineItem>

            </Timeline>
          </div>
        </div>
      </section>
    );
  }
}

Steps.propTypes = propTypes;
Steps.defaultProps = defaultProps;

export default Steps;
