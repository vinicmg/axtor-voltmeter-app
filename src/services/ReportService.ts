import http from '@/http-common';

class ReportService {
    getAll(): Promise<any> {
        return http.get('/relatorios')
    }
    create(data: any): Promise<any> {
        return http.post('/relatorios/novo', data)
    }
    update(id: any, data: any): Promise<any> {
        return http.put(`/relatorios/editar/${id}`, data)
    }
}

export default new ReportService();