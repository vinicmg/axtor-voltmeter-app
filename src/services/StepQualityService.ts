import http from '@/http-common'

class StepQualityService {
    getAll(params: any): Promise<any> {
        return http.get('/etapas/qualidade', {
            params
        })
    }
    create(data: any): Promise<any> {
        return http.post('/cadastro/etapas/qualidade', data)
    }
    update(id: any, data: any): Promise<any> {
        return http.put(`/etapas/qualidade/${id}`, data)
    }
}

export default new StepQualityService();