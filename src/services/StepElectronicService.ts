import http from '@/http-common'

class StepElectronicService {
    getAll(params: any): Promise<any> {
        return http.get('/etapas/eletronica', {
            params
        })
    }
    create(data: any): Promise<any> {
        return http.post('/cadastro/etapas/eletronica', data)
    }
    update(id: any, data: any): Promise<any> {
        return http.put(`/etapas/eletronica/${id}`, data)
    }
}

export default new StepElectronicService();