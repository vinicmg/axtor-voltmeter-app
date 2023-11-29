import http from '@/http-common';

class TechnicianService {
    getAll(params: any): Promise<any> {
        return http.get('/tecnico', {
            params
        });
    }
    create(data: any): Promise<any> {
        return http.post('/cadastro/tecnico', data)
    }
    update(id: any, data: any): Promise<any> {
        return http.put(`/tecnico/editar/${id}`, data)
    }
    delete(id: any): Promise<any> {
        return http.delete(`/tecnico/${id}`)
    }
}

export default new TechnicianService();