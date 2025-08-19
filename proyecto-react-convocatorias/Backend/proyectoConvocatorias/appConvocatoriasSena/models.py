from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class TipoConvocatoria(models.Model):
    tipoNombre = models.CharField(max_length=50, unique=True)

    def _str_(self):
        return self.tipoNombre
    

class Convocatoria(models.Model):
    conNombre = models.CharField(max_length=200)
    conTipo = models.ForeignKey(TipoConvocatoria, on_delete=models.PROTECT)
    conCantidadBeneficiarios = models.IntegerField()
    conFechaInicio = models.DateTimeField()
    conFechaFinal = models.DateTimeField()
    conFechaCreacion =models.DateTimeField(auto_created=True)
    conDocumento = models.FileField(upload_to='documentos/', blank=True)
    
    def _str_(self):
        return self.tipoNombre
    
class Usuario(AbstractUser):
    usuRol = models.CharField(max_length=50,choices=("Lider","Funcionario","Aprendiz"))
    usuIdentificacion = models.CharField(max_length=15,unique=True)

    def __str__(self):
        return self.username
    
class Funcionario(models.Model):
    funUsuario = models.ForeignKey(Usuario, on_delete=models.PROTECT)
    funCargo = models.CharField(max_length=50)
    
    def __str__(self):
        return f"{self.funUsuario.first_name} {self.funUsuario.last_name}"

class Aprendiz(models.Model):
    aprUsuario = models.ForeignKey(Usuario, on_delete=models.PROTECT)
    aprFicha = models.CharField(max_length=10)
    aprPrograma = models.CharField(max_length=50)
    def __str__(self):
        return f"{self.aprUsuario.first_name} {self.aprUsuario.last_name}"

class Postulacion(models.Model):
    posAprendiz=models.ForeignKey(Aprendiz, on_delete=models.PROTECT)
    posConvocatoria = models.ForeignKey(Convocatoria, on_delete=models.PROTECT)
    posFechaHoraPostulacion = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Postulacion\n Aprendiz:{self.posAprendiz} Convocatoria:{self.posConvocatoria}" 
    

class ResultadoPostulacion(models.Model):
    resPostulacion = models.ForeignKey(Postulacion, on_delete=models.PROTECT)
    resValoracion = models.IntegerField()
    resResultado = models.CharField(max_length=15,choices=("Beneficiado","NO Beneficiado"),Null=True,default=None)
    resFechaActualizar = models.DateTimeField(auto_now=True)
    def __str__(self):
        return f"Postulacion :{self.resPostulacion.posAprendiz} Valoracion: {self.resResultado}" 