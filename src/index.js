import Test from './components/Test/index'
import Test2 from './components/Test2/index'
import Test3 from './components/Test3/index'
import Icon from './components/Icon/index'
import SvgAnimation from './components/SvgAnimation/index'
import Loading from './components/Loading/index'
import FlyBox from './components/FlyBox/index'
import Container from './components/Container/index'
import ImoocLogo from './components/ImoocLogo/index'
import VueCountTo from './components/VueCountTo/index'
import VueEcharts from './components/VueEcharts/index'
import BaseScroll from './components/BaseScroll/index'

export default function(Vue) {
  Vue.use(Test)
  Vue.use(Test2)
  Vue.use(Test3)
  Vue.use(Icon)
  Vue.use(SvgAnimation)
  Vue.use(Loading)
  Vue.use(FlyBox)
  Vue.use(Container)
  Vue.use(ImoocLogo)
  Vue.use(VueCountTo)
  Vue.use(VueEcharts)
  Vue.use(BaseScroll)
}
