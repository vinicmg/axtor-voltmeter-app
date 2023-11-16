import http from '@/http-common';

class PlateService {
    getAll(): Promise<any> {
        return http.get('/placa')
    }
    create(data: any): Promise<any> {
        return http.post('/cadastro/placa', data)
    }
    update(id: any, data: any): Promise<any> {
        return http.put(`/placa/editar/${id}`, data)
    }
    delete(id: any): Promise<any> {
        return http.delete(`/placa/${id}`)
    }
}

export default new PlateService();