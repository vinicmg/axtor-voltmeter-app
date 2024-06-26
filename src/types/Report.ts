export default interface Report {
    id: null,
    num_serie: string,
    dt_inicial: Date,
    dt_final: Date,
    id_tp_placa: number,
    id_config: number,
    id_tecnico: number
    pregrav_5: number,
    pregav_12: number,
    pregrav_neg12: number,
    posgrav_5: number,
    posgrav_12: number,
    posgrav_neg12: number,
    trim_rv1: number,
    trim_rv2: number,
    trim_rv3: number,
    trim_rv4: number,
    trim_rv5: number,
    trim_rv6: number,
    trim_rv7: number,
    trim_rv8: number,
    trim_rv9: number,
    trim_rv10: number,        
    osc_5: number,
    osc_gnd: number,
    osc_12: number,
    osc_neg12: number,
    osc_vref: number,
    osc_1khz: number,
    osc_100hz: number,
    osc_10khz: number,    
}