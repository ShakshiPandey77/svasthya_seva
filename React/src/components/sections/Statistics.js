import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Switch from '../elements/Switch';
import Button from '../elements/Button';
import axios from 'axios';

const propTypes = {
  ...SectionTilesProps.types,
  pricingSwitcher: PropTypes.bool,
  pricingSlider: PropTypes.bool
}

const defaultProps = {
  ...SectionTilesProps.defaults,
  pricingSwitcher: false,
  pricingSlider: false
}

class Statistics extends React.Component {

  state = {
    priceChangerValue: "1",
    priceInput: {
      // 0: "1,000",
      // 1: "1,250"
    },
    priceOutput: {
      plan1: {
        0: ["$", "49", "monthly"],
        1: ["$", "39", "annually"]
      },
      plan2: {
        0: ["$", "69", "monthly"],
        1: ["$", "59", "annually"]
      },
      plan3: {
        0: ["$", "89", "monthly"],
        1: ["$", "79", "annually"]
      }
    },
    data:[],
    Karnataka:[]
  }

  slider = React.createRef();
  sliderValue = React.createRef();

  componentDidMount() {
    if (this.props.pricingSlider) {
      this.slider.current.setAttribute('min', 0);
      this.slider.current.setAttribute('max', Object.keys(this.state.priceInput).length - 1);
      this.thumbSize = parseInt(window.getComputedStyle(this.sliderValue.current).getPropertyValue('--thumb-size'), 10);
      this.handleSliderValuePosition(this.slider.current);
    }

    axios.get(`https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true`)
  .then(res => {
    const data = res.data;
    this.setState({ data });
    const Karnataka = data.regionData[15];
    console.log(Karnataka);
    this.setState({Karnataka});


  })
  }

  handlePricingSwitch = (e) => {
    this.setState({ priceChangerValue: e.target.checked ? '1' : '0' });
  }

  handlePricingSlide = (e) => {
    this.setState({ priceChangerValue: e.target.value });
    this.handleSliderValuePosition(e.target);
  }

  handleSliderValuePosition = (input) => {
    const multiplier = input.value / input.max;
    const thumbOffset = this.thumbSize * multiplier;
    const priceInputOffset = (this.thumbSize - this.sliderValue.current.clientWidth) / 2;
    this.sliderValue.current.style.left = input.clientWidth * multiplier - thumbOffset + priceInputOffset + 'px';
  }

  getPricingData = (values, set) => {
    return set !== undefined ? values[this.state.priceChangerValue][set] : values[this.state.priceChangerValue];
  }

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
      pricingSwitcher,
      pricingSlider,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'pricing section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'pricing-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'COVID-19  Cases India',
      paragraph: ''
    };

    const sectionHeader1 = {
      title: 'COVID-19  Cases Karnataka',
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


                <div className="tiles-item-inner has-shadow">

                    <div className="pricing-item-header pb-16 mb-24">
                      <div className="pricing-item-price">
                        <center>
                        <span className="pricing-item-price-amount h3">
                        Active Cases
                        </span>
                        </center>
                      </div>
                    </div>

                      <div className="pricing-item-features-title fw-500 text-xs text-color-mid mb-24">
                          <center>{ this.state.data.activeCases}</center>
                      </div>

                </div>


                <div className="tiles-item-inner has-shadow">

                    <div className="pricing-item-header pb-16 mb-24">
                      <div className="pricing-item-price">
                        <center>
                        <span className="pricing-item-price-amount h3">
                         Recovered
                        </span>
                        </center>
                      </div>
                    </div>

                      <div className="pricing-item-features-title fw-500 text-xs text-color-mid mb-24">
                          <center>{ this.state.data.recovered}</center>
                      </div>

                </div>

                <div className="tiles-item-inner has-shadow">

                    <div className="pricing-item-header pb-16 mb-24">
                      <div className="pricing-item-price">
                        <center>
                        <span className="pricing-item-price-amount h3">
                        Deaths
                        </span>
                        </center>
                      </div>
                    </div>

                      <div className="pricing-item-features-title fw-500 text-xs text-color-mid mb-24">
                          <center>{ this.state.data.deaths}</center>
                      </div>

                </div>

                <div className="tiles-item-inner has-shadow">

                    <div className="pricing-item-header pb-16 mb-24">
                      <div className="pricing-item-price">
                        <center>
                        <span className="pricing-item-price-amount h3">
                        Total Cases
                        </span>
                        </center>
                      </div>
                    </div>

                      <div className="pricing-item-features-title fw-500 text-xs text-color-mid mb-24">
                          <center>{ this.state.data.totalCases}</center>
                      </div>

                </div>

            </div>
          </div>

          <div className={innerClasses}>
            <SectionHeader data={sectionHeader1} className="center-content" />

            <div className={tilesClasses}>


                <div className="tiles-item-inner has-shadow">

                    <div className="pricing-item-header pb-16 mb-24">
                      <div className="pricing-item-price">
                        <center>
                        <span className="pricing-item-price-amount h3">
                        Active Cases
                        </span>
                        </center>
                      </div>
                    </div>

                      <div className="pricing-item-features-title fw-500 text-xs text-color-mid mb-24">
                          <center>{ this.state.Karnataka.totalInfected}</center>
                      </div>

                </div>


                <div className="tiles-item-inner has-shadow">

                    <div className="pricing-item-header pb-16 mb-24">
                      <div className="pricing-item-price">
                        <center>
                        <span className="pricing-item-price-amount h3">
                         Recovered
                        </span>
                        </center>
                      </div>
                    </div>

                      <div className="pricing-item-features-title fw-500 text-xs text-color-mid mb-24">
                          <center>{ this.state.Karnataka.recovered}</center>
                      </div>

                </div>

                <div className="tiles-item-inner has-shadow">

                    <div className="pricing-item-header pb-16 mb-24">
                      <div className="pricing-item-price">
                        <center>
                        <span className="pricing-item-price-amount h3">
                        Deaths
                        </span>
                        </center>
                      </div>
                    </div>

                      <div className="pricing-item-features-title fw-500 text-xs text-color-mid mb-24">
                          <center>{ this.state.Karnataka.deceased}</center>
                      </div>

                </div>

                <div className="tiles-item-inner has-shadow">

                    <div className="pricing-item-header pb-16 mb-24">
                      <div className="pricing-item-price">
                        <center>
                        <span className="pricing-item-price-amount h3">
                        Total Cases
                        </span>
                        </center>
                      </div>
                    </div>

                      <div className="pricing-item-features-title fw-500 text-xs text-color-mid mb-24">
                          <center>{ this.state.Karnataka.totalCases}</center>
                      </div>

                </div>

            </div>
          </div>


        </div>
      </section>
    );
  }
}

Statistics.propTypes = propTypes;
Statistics.defaultProps = defaultProps;

export default Statistics;
