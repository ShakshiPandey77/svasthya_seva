import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Flowchart from './Flowchart';
import QuestionData from './QuestionData';
import QuestionData2 from './QuestionData2';

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

            <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile">
                <QuestionData/>
              </div>
              <div>
              <QuestionData2/>
              </div>
            </div>
            </div>
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
