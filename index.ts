import { SmartHeladera } from './smartHeladera';

let smartHeladera: SmartHeladera[] = [
    new SmartHeladera('Samsung', 'RF23R62'),
    new SmartHeladera('Lg', 'RF23R84'),
    new SmartHeladera('Noblex', 'RF23R90'),
];
smartHeladera[0].encender();
smartHeladera[0].mostrarInfo();
smartHeladera[1].cambiarTemperatura(5);
smartHeladera[1].mostrarInfo();
smartHeladera[2].encender();
smartHeladera[2].conectarInternet();
smartHeladera[2].mostrarInfo();