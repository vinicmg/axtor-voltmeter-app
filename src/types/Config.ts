export default interface Config {
    id: null,
    nome: string,
    pregrav_5_min: number,
    pregrav_5_max: number,
    pregrav_12_min: number,
    pregrav_12_max: number,
    pregrav_neg12_min: number,
    pregrav_neg12_max: number,
    posgrav_5_min: number,
    posgrav_5_max: number,
    posgrav_12_min: number,
    posgrav_12_max: number,
    posgrav_neg12_min: number,
    posgrav_neg12_max: number,
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
    fp_5_min: number,
    fp_5_max: number,
    fp_12_min: number,
    fp_12_max: number,
    fp_neg12_min: number,
    fp_neg12_max: number,
    osc_1khz_min: number,
    osc_1khz_duty_min: number,
    osc_1khz_max: number,
    osc_1khz_duty_max: number,
    osc_100hz_min: number,
    osc_100hz_duty_min: number,
    osc_100hz_max: number,
    osc_100hz_duty_max: number,
    osc_10khz_min: number,
    osc_10khz_duty_min: number,
    osc_10khz_max: number,
    osc_10khz_duty_max: number,
    capacitancia_min: number,
    capacitancia_max: number,
    sens_corrent_min: number,
    sens_corrent_max: number,
    indutancia_min: number,
    indutancia_max: number,
    corr_atracad12_min: number,
    corr_atracad12_max: number,
    offset_cabos_min: number,
    offset_cabos_max: number,
    corr_atracad13a_min: number,
    corr_atracad13a_max: number,
    corr_atracad13b_min: number,
    corr_atracad13b_max: number,
    pwm_pulsador_min: number,
    pwm_pulsador_max: number,
    pwm_vedacao_min: number,
    pwm_vedacao_max: number,
    res_carcaca_min: number,
    res_carcaca_max: number,
    res_hv_min: number,
    res_hv_max: number,
    fb_duty_min: number,
    fb_duty_max: number,
    fb_tensao_min: number,
    fb_tensao_max: number,
    tb_linear: number,
    tb_proporcional: number,
    res_hv_megometro: number,
    offset_megometro: number,
    res_megometro: number
}
