import http from '@/http-common';

class TypePlateService {
    getAll(params: any): Promise<any> {
        return http.get('/tipodeplaca', {
            params
        });
    }
    create(data: any): Promise<any> {
        return http.post('/cadastro/tipodeplaca', data)
    }
    update(id: any, data: any): Promise<any> {
        return http.put(`/tipodeplaca/editar/${id}`, data)
    }
    delete(id: any): Promise<any> {
        return http.delete(`/tipodeplaca/${id}`)
    }
}

export default new TypePlateService();