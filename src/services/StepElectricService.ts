import http from '@/http-common'

class StepElectricService {
    getAll(params: any): Promise<any> {
        return http.get('/etapas/eletrica', {
            params
        })
    }
    create(data: any): Promise<any> {
        return http.post('/cadastro/etapas/eletrica', data)
    }
    update(id: any, data: any): Promise<any> {
        return http.put(`/etapas/eletrica/${id}`, data)
    }
}

export default new StepElectricService();