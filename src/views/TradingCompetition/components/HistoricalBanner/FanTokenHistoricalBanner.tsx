import 'atropos/css'
import { useState } from 'react'
import styled from 'styled-components'
import FanTokenCompetition from '../../FanTokenCompetition'
import layer1 from '../../pngs/fan-token-histortical-banner-layer1.png'
import layer2 from '../../pngs/fan-token-histortical-banner-layer2.png'
import layer3 from '../../pngs/fan-token-histortical-banner-layer3.png'
import layer4 from '../../pngs/fan-token-histortical-banner-layer4.png'
import layer5 from '../../pngs/fan-token-histortical-banner-layer5.png'
import {
  BannerBg,
  BannerFooter,
  BannerInner,
  BannerWrapper,
  CollapseButton,
  ContentWrapper,
  FooterButton,
} from './styled'

const Layer1Image = styled.img`
  position: absolute;
  bottom: 0px;
  right: 200px;
  width: 120px;
`
const Layer2Image = styled.img`
  position: absolute;
  top: 25px;
  right: 100px;
  width: 110px;
`
const Layer3Image = styled.img`
  position: absolute;
  top: -15px;
  left: 453px;
  width: 120px;
`
const Layer4Image = styled.img`
  position: absolute;
  top: 40px;
  left: 50px;
  width: 315px;
`
const Layer5Image = styled.img`
  position: absolute;
  top: -10px;
  left: 330px;
  width: 130px;
`

export const FanTokenHistoricalBanner: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <>
      <BannerWrapper shadow={false} highlight={false}>
        <BannerInner>
          <BannerBg
            style={{ background: `linear-gradient(180deg, #7645D9 0%, #452A7A 100%)` }}
            data-atropos-offset="0"
            collapsed={collapsed}
          />

          <Layer1Image src={layer1.src} alt="" data-atropos-offset="3" />
          <Layer2Image src={layer2.src} alt="" data-atropos-offset="6" />
          <Layer4Image src={layer4.src} data-atropos-offset="9" />
          <Layer5Image src={layer5.src} data-atropos-offset="6" />
          <Layer3Image src={layer3.src} alt="" data-atropos-offset="9" />
          <CollapseButton
            collapsed={collapsed}
            data-atropos-offset="0"
            onClick={() => {
              setCollapsed(!collapsed)
            }}
          />
        </BannerInner>
      </BannerWrapper>
      {!collapsed && (
        <>
          <ContentWrapper>
            <FanTokenCompetition />
          </ContentWrapper>
          <BannerFooter>
            <FooterButton
              onClick={() => {
                setCollapsed(true)
              }}
            />
          </BannerFooter>
        </>
      )}
    </>
  )
}
