import Sun from '../../public/icons/01d.svg';
import Moon from '../../public/icons/01n.svg';
import Cloudy from '../../public/icons/02d.svg';
import CloudyMoon from '../../public/icons/02n.svg';
import Cloud from '../../public/icons/03d.svg';
import Cloud_1 from '../../public/icons/03n.svg';
import Cloud_2 from '../../public/icons/04d.svg';
import Cloud_3 from '../../public/icons/04n.svg';
import Rainy from '../../public/icons/09d.svg';
import Rainy_1 from '../../public/icons/09n.svg';
import DayRainy from '../../public/icons/10d.svg';
import NightRainy from '../../public/icons/10n.svg';
import Lightning from '../../public/icons/11d.svg';
import Lightning_1 from '../../public/icons/11n.svg';
import Snowy from '../../public/icons/13d.svg';
import Snowy_1 from '../../public/icons/13n.svg';
import Def from '../../public/icons/50d.svg';
import Def_1 from '../../public/icons/50n.svg';
import CloudMoon from '../../public/icons/1232n.svg';


const IconTypes = {
    '01d': Sun,
    '01n': Moon,
    '02d': Cloudy,
    '02n': CloudyMoon,
    '03d': Cloud,
    '03n': Cloud_1,
    '04d': Cloud_2,
    '04n': Cloud_3,
    '09d': Rainy,
    '09n': Rainy_1,
    '10d': DayRainy,
    '10n': NightRainy,
    '11d': Lightning,
    '11n': Lightning_1,
    '13d': Snowy,
    '13n': Snowy_1,
    '50d': Def,
    '50n': Def_1,
    '1232n': CloudMoon
};

const IconComponent = ({name, ...props}) => {
    const Icon = IconTypes[name];
    return (
        <Icon {...props.className} />
    )
};

export default IconComponent;